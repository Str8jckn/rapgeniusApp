var app = angular.module('myApp',[])

.controller('mainController',function($scope,$rootScope,$timeout,$interval){
  $scope.poll_title = "Who Is The GOAT MC ";
  $scope.isButton = true;
  $scope.options = [
    {name: "Jay Z", votes: 0, pct: 0},
    {name: "Pharoahe Monch", votes: 0, pct: 0},
    {name: "Eminem", votes: 0, pct: 0},
    {name: "Nas", votes: 0, pct: 0},
    {name: "Biggie", votes: 0, pct: 0},
    {name: "Tupac", votes: 0, pct: 0},
    {name: "Andre 3000", votes: 0, pct: 0},
    {name: "Scarface", votes: 0, pct: 0},
    {name: "Lupe Fiasco", votes: 0, pct: 0},
    {name: "Royce 5 9", votes: 0, pct: 0},
    {name: "Dmx", votes: 0, pct: 0},
    {name: "Lil Wayne", votes: 0, pct: 0},
    {name: "Rick Ross", votes: 0, pct: 0},
    {name: "Joe Budden", votes: 0, pct: 0},
    {name: "Kendrick Lamar", votes: 0, pct: 0},
    {name: "Rakim", votes: 0, pct: 0},
    {name: "Big Daddy Kane", votes: 0, pct: 0},
    {name: "Method Man", votes: 0, pct: 0},
    {name: "Snoop Dogg", votes: 0, pct: 0},
    {name: "T.I.", votes: 0, pct: 0},
    {name: "Pusha T", votes: 0, pct: 0},
    {name: "Loaded Lux", votes: 0, pct: 0},
    {name: "Drake", votes: 0, pct: 0},
    {name: "Dr. Dre", votes: 0, pct: 0},
    {name: "Nicki Minaj", votes: 0, pct: 0},
    {name: "Lil Kim", votes: 0, pct: 0},
    {name: "Queen Latifah", votes: 0, pct: 0},
    {name: "Lauryn Hill", votes: 0, pct: 0},
    {name: "J.Cole", votes: 0, pct: 0},
    {name: "Kanye West", votes: 0, pct: 0},
    {name: "Game", votes: 0, pct: 0},
    {name: "Beanie Sigel", votes: 0, pct: 0},
    {name: "Eve", votes: 0, pct: 0},
    {name: "Missy Elliot", votes: 0, pct: 0},
    {name: "Rapsody", votes: 0, pct: 0},
    {name: "Foxy Brown", votes: 0, pct: 0},
    {name: "Jean Grae", votes: 0, pct: 0},
    {name: "MC Lyte", votes: 0, pct: 0},
    {name: "Remy Ma", votes: 0, pct: 0},
    {name: "JadaKiss", votes: 0, pct: 0},
    {name: "Other", votes: 0, pct: 0},
  ];
  $scope.totalVotes = sumVotes();

  $scope.addVote = function(opt, index){
    if($scope.isButton){
      $scope.isButton = false;
      opt.votes += 1;
      $scope.totalVotes = sumVotes();
      updateRowVotes();
      closeBooth(index);
    }
  }

  function sumVotes(){
    var votes = 0;
    for (var key in $scope.options) {
      if ($scope.options.hasOwnProperty(key)) {
        votes += $scope.options[key].votes;
      }
    }
    return votes;
  }

  function updateRowVotes(){
    for (var key in $scope.options) {
      if ($scope.options.hasOwnProperty(key)) {
        var obj = $scope.options[key];
        console.log($scope.totalVotes);
        obj.pct = (obj.votes / $scope.totalVotes)*100;
      }
    }
  }

  function closeBooth(clicked){
    $(".vote-row").each(function(index) {
      if(clicked !== index){
        $(this).find("button.vote-btn").css("transform", "scale(0)");
        $(this).find("button.vote-btn").text("");
      }else{
        $(this).find("button.vote-btn").text("");
        $(this).find("button.vote-btn").css({"border-radius": "100%", "padding": "7px 10px"});
        $(this).find("button.vote-btn").append("<i class='checkup fa fa-check' aria-hidden='true'></i>");
      }
    });
  }
});
