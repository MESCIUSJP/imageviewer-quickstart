window.onload =  function() {
  
  const viewer = new DsImageViewer("#imageviewer");  
  
  viewer.addPlugin(new PageToolsPlugin({ 
    toolbarLayout: ["rotate-image", "flip-horizontal", "flip-vertical", "crop-image", "resize-image"]
  }));
  viewer.addPlugin(new PaintToolsPlugin());
  viewer.addPlugin(new ImageFiltersPlugin());

  viewer.open("./sample1.jpg");
}
