function Player(){
    this.chips = 10;
    this.heads = 0;
    this.tails = 0;
    this.flip = 0; // value is number of heads observed on last flip
    this.flips_per_play = 2;
    this.payout = function(){
        if(this.heads == this.tails){
            return this.heads*this.heads;
        }
        return 0;
    }
    this.continue_game = function(){
        if(this.chips == 0){
            alert("No more chips! Start a new game!");
            return 
        }
        this.chips = this.chips - 1;
        this.flip = 0;
        for(var i = 0; i < this.flips_per_play; i++){
            if(Math.random() < 0.5){
                this.flip += 1;
            }
        }
        this.heads += this.flip;
        this.tails += (this.flips_per_play - this.flip);
    }
    this.reset_game = function(){
        this.chips += this.payout();
        this.heads = 0;
        this.tails = 0;
    }
    this.new_game = function(){
        this.chips = 10;
        this.heads = 0;
        this.tails = 0;
        this.flip = 0;
    }
    this.update_view = function(){
        $("#chips").html(this.chips.toString());
        $("#heads").html(this.heads.toString());
        $("#tails").html(this.tails.toString());
        var s = "";
        var p = this.payout();
        if(p == 0){
            $("#heads").css({color:"#a62a2a"});
            $("#tails").css({color:"#a62a2a"});
        }
        else{
            $("#heads").css({color:"#2aa62a"});
            $("#tails").css({color:"#2aa62a"});
        }
        if(this.flip != 1){
            s = this.flip.toString() + " heads in the last " + this.flips_per_play.toString() + " flips";
        }
        else{
            s = "1 head in the last " + this.flips_per_play.toString() + " flips"
        }
        $("#last").html(s);
        $("#reset").html("Win " + p.toString() + " & Reset")
    }
}

function bind_buttons(p){
    $("#continue").on('click',function(p){
        p.continue_game();
        p.update_view();
    });
    $("#reset_game").on('click',function(p){
        p.reset_game();
        p.update_view();
    });
    $("#new_game").on('click',function(p){
        p.new_game();
        p.update_view();
    });
}

var p = new Player();
//bind_buttons(p);
function continue_update(event){
    event.data.player.continue_game();
    event.data.player.update_view();
}

function reset_update(event){
    event.data.player.reset_game();
    event.data.player.update_view();
}

function new_update(event){
    event.data.player.new_game();
    event.data.player.update_view();
}

$("#continue").on('click',{player: p},continue_update);
$("#reset").on('click',{player: p},reset_update);
$("#newgame").on('click',{player: p},new_update);