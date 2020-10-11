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
