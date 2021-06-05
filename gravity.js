AFRAME.registerComponent('gravity', {
   schema:{
      floor:{type: 'number',default:0 } ,
      x:{type: 'number',default:0 } ,
      y:{type: 'number',default:0.1 } ,
      z:{type: 'number',default:0 } 
},
  init: function () {
    var el = this.el;
      var name=  el.getAttribute('id');
      label=document.createElement('a-entity');
      label.setAttribute('text',"value: "+ name + ";font:monoid; color:white; width:4 ; ");
      label.setAttribute('position',"0.5 0.95 0");
      label.setAttribute('class',"nametag");
      el.appendChild(label); 
  },
  tick: function(){
  var prev=this.el.getAttribute('position');
  var vel=this.el.getAttribute('gravity');
   if (prev.y>=0) //if above the 'floor'
   {prev.y+=vel.y; //The current position should change by whatever the velocity is.
   vel.y+=-0.001;//subtract a small amount from the Y part of the velocity, this is acceleration due to gravity.
   }else{//if at or below the 'floor', time to bounce.
   vel.y=-vel.y*0.9;// This reverses the direction, and loses 10% of the velocity from the bounce. 
   prev.y=0; //This is a clumsy way to push the object back to the floor level, otherwise it could get stuck. 
   }
   this.el.setAttribute('position',prev);
   this.el.setAttribute('gravity',vel);
     // console.log(prev);
  
  }

});
