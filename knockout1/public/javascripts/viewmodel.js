var ViewModel = function() {
  this.numVotes1 = ko.observable(0);
  this.numVotes2 = ko.observable(0);
  this.setVote = function() {
    var votes = { numVotes1: 0, numVotes2: 0 };
    if (this.option1())
    {
      votes.numVotes1 = 1;
    }
    if (this.option2())
    {
      votes.numVotes2 = 1;
    }
    this.socket.emit('voteReceived', votes);
  }
  this.option1 = ko.observable(false);
  this.option2 = ko.observable(false);
  this.numTotalVotes = ko.computed(function() { 
    return this.numVotes1() + this.numVotes2();
  }, this);
  
  this.votes = ko.observableArray();
  this.getVotes = ko.computed(function() {
    this.numVotes1();
    this.numVotes2();
    var self = this;
    $.getJSON('/api/votes', function(data) {
     self.votes.removeAll();
     for(var i in data.votes)
     {
       self.votes.push(data.votes[i]);
     }
    });
  }, this);


  this.setupSocket = function() {
    var self = this;
    this.socket = io.connect();
    this.socket.on('voteCount', function (data) {
      self.numVotes1(data.numVotes1);
      self.numVotes2(data.numVotes2);
    });
  }
}

function init()
{
  var vm = new ViewModel();
  vm.setupSocket();
  ko.applyBindings(vm);  
}

