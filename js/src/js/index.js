var toggleVoice = true
var tempToggle = 0
var path = $('#path');
Draggable.create("#indicator", {
    type: "rotation",
    throwProps: false,
    maxRotation: 360,
    onDrag: function () {
        // console.log(toggleVoice)
        // if(toggleVoice){
        //     console.log(this.rotation%360)
        // }else{
        //     console.log(360 + 36 - this.rotation%360)
        // }
        // console.log(this.rotation)
        if(Math.floor(this.rotation%360) === 359){
            if(tempToggle !== tempToggle){
              toggleVoice = !toggleVoice
            }
            tempToggle++
        }
        path.css('stroke-dashoffset', 620 * (1 - this.rotation / 360));
        // console.log('0.'+Math.floor((this.rotation%360+36)/36*10))
        // console.log(this.rotation%360)
      if(toggleVoice){
          var up = Math.floor((this.rotation%360+36)/36*10)
          window.voiceProgressValue = up > 99 ? 1 : '0.'+up
      }else{
          // console.log(Math.floor((396 - (this.rotation%360+36))/36*10))
          var less = Math.floor((396 - (this.rotation%360+36))/36*10)
          window.voiceProgressValue = less > 99 ? 1 : less < 10 ? 0.05 : '0.'+less
      }
      $('.bgm')[0].volume = window.voiceProgressValue
    },
    onDragEnd: function () {
        // this.enable()

    }
});




