// Blob --> Binary Large Object
// var abc = new Blob(["Blob Content"], {type: Blob property containing MIME property})
// var abc = new Blob(["Tutorial on JS"], {
//     type: "text/plain"
// })

// var def = new FileReader();

// def.addEventListener("loadend", function(e){
//     document.getElementById("para").innerHTML = e.srcElement.result
// })

// def.readAsText(abc)

// let def = new FileReader()
// def.readAsArrayBuffer(abc)
// def.onload = function(event){
//     let res = def.result
// }

// link.href = URL.createObjectURL(abc);

function downloadTextFile(){
    const text = "Welcome";
    const blob = new Blob([text], {
        type: "text/plain"
    })
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textfile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function uploadFile(){
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const blob = new Blob([file], {
        type: "text/plain"
    })

    const formData = new FormData();
    formData.append("file", blob);

    fetch("/upload", {
        method: "POST",
        body: formData
    }).then(response => {
        if(response.ok){
            alert("File uploaded successfully");
        }else{
            alert("File upload failed");
        }
    }).catch(error => {
        console.log("File upload error:", error);
    });
}