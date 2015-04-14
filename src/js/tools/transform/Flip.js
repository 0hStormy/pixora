(function () {
  var ns = $.namespace('pskl.tools.transform');

  ns.Flip = function () {
    this.toolId = 'tool-flip';
    this.helpText = 'Flip vertically';
    this.tooltipDescriptors = [
      {key : 'alt', description : 'Flip horizontally'},
      {key : 'ctrl', description : 'Apply to all layers'},
      {key : 'shift', description : 'Apply to all frames'}
    ];
  };

  pskl.utils.inherit(ns.Flip, ns.Transform);

  ns.Flip.prototype.applyToolOnFrame_ = function (frame, altKey) {
    var axis;

    if (altKey) {
      axis = pskl.utils.FrameTransform.HORIZONTAL;
    } else {
      axis = pskl.utils.FrameTransform.VERTICAL;
    }

    pskl.utils.FrameTransform.flip(frame, axis);
  };

})();
