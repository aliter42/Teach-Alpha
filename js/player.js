function Player()
{
    var that = this;
    that.queue = [];
    that.queue.add = that.queue.push;
    that.queue.remove = that.queue.shift;
    that.player = document.getElementById('player');
    that.queueOverCallBack = null;
    that.player.addEventListener("ended", function()
    {
        that.player.pause();
        if(that.queue.length > 0)
        {
            var file = that.queue.remove();
            that.player.src = file;
            console.log("Playing "+ file);
            that.player.play();
            that.playing = true;
        }
        else
        {
            that.playing = false;
            console.log("Playing Ended");
            if(that.queueOverCallBack != null)
            {
                that.queueOverCallBack(that.queueOverCallBackArg);
            }

        }
    }, false);
    that.playing = false;
}

Player.prototype.setQueueOverCallBack = function(callback, callbackArg)
{
    var that = this;
    that.queueOverCallBack    = callback;
    that.queueOverCallBackArg = callbackArg;
}

Player.prototype.playNext = function(file)
{
    var that = this;
    if(typeof file === 'string')
    {
        console.log("Queuing file " + file);
        that.queue.add(file);        
    }
    else
    {
        for(var i = 0; i < file.length; ++i)
        {
            console.log("Queuing file " + file[i]);
            that.queue.add(file[i]);
        }
    }
    
    if(that.playing == false)
    {
        var next = that.queue.remove();
        console.log("Playing first file " + next);
        that.player.src = next;
        that.player.play();
        that.playing = true;
    }
}