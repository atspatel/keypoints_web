export function downloadUrl(url, name = "file") {
  fetch(`${url}?x-origin=keypoints`).then(response => {
    response.blob().then(blob => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
    });
  });
}

export async function imageUrltoFile(url) {
  //https://serverfault.com/questions/856904/chrome-s3-cloudfront-no-access-control-allow-origin-header-on-initial-xhr-req/856948#856948
  return fetch(`${url}?x-origin=keypoints`)
    .then(res => {
      return res.blob();
    })
    .then(blob => {
      return new File([blob], "test.jpg", { type: blob.type });
    });
}

export async function navigator_share(url, title, text, image_url) {
  if (navigator.share) {
    imageUrltoFile(image_url).then(file => {
      navigator
        .share({
          title: title,
          text: text,
          url: url,
          files: [file]
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log(error));
    });
  } else {
    console.log("Not Supported");
  }
}
