(function() {

  function init() {
    initTables();
    initImages();
  }

  function initTables() {
    $(".table-awesome").dataTable({
      "bPaginate": false,
      "bInfo": true
    });
  }

  function initImages() {
    $("img").each(function(i, img) {
      var
        $img = $(img),
        isThumbnail = $img.hasClass("thumbnail");

      isThumbnail = isThumbnail || $img.parents(".thumbnail").length > 0;
      if (!isThumbnail) {
        if ($img.attr("src").indexOf("forkme") === -1) {
          $img.addClass("thumbnail");
        }
      }
    });
  }

  $(document).ready(init);

})(this);
