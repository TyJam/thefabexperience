<?php
  echo showImages();
  function showImages(){
    $out ="<h2>Gallery</h2>";
    $out .= "<div id='slideshow-container'>";
    $folder ="images/food-gallery";
    $filesInFolder = new DirectoryIterator( $folder);
    while($filesInFolder->valid() ){
      $file = $filesInFolder->current();
      $filename = $file->getFilename();
      $src = "$folder/$filename";
      $fileInfo = new Finfo(FILEINFO_MIME_TYPE);
      $mimeType = $fileInfo->file($src);
      if($mimeType === 'image/jpeg'){
        $out .="<div class='mySlides fade'>";

        $out .= "<img src='$src' />";
        $out .="</div>";
      }
      $filesInFolder->next();
    }
    $out.="</div>";
    $out.="<div>";
    $out.="<div id='prevHolder'>";
    $out.="</div>";
    $out.="<div id='nextHolder'>";
    $out.="</div>";
    $out.="</div>";

    return $out;
  }

  ?>
