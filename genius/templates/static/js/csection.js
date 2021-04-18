var sharingInit = $(".sharing-init");
var shareCount = $(".shareCount");
var sharingParent = $(".sharing-option");
var sharingIcons = $(".icon");
var socialShowing = false;
var count = 0;
var downVote = 0;

function shareCounter() {
  var $t = $(this);
  if ($t.hasClass("plus")) {
    count = count + 1;
    $t
      .parent()
      .find(".share-plus")
      .html(count);
  } else {
    downVote = downVote + 1;
    $t
      .parent()
      .find(".share-minus")
      .html(downVote);
  }
}

function showSharing() {
  if (!socialShowing) {
    sharingParent.show();
    sharingIcons.each(function(index) {
      var $t = $(this);
      setTimeout(function() {
        $t.addClass("is-viewing");
      }, 100 * index);
    });
    socialShowing = true;
  } else {
    sharingParent.hide();
    sharingIcons.each(function(index) {
      var $t = $(this);
      $t.removeClass("is-viewing");
    });
    socialShowing = false;
  }
}

sharingInit.click(showSharing);
shareCount.click(shareCounter);