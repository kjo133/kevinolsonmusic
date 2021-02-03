console.log('testing hello');

//live
// var folder = "../tracks/";

//local
 var folder="/tracks"

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if(val.match(/\.(wav)$/)){
                //get the File name by itself, remove extension, add space before capital letters
                var fileName = val.split('/').pop();
                fileName= fileName.replace(/\.[^/.]+$/, "");
                fileName = fileName.replace(/([A-Z])/g, ' $1').trim();
                console.log('value ' + folder+val);
                
                $("#tracks").append(
                    "<div class='row'><div class='col'><h2>"+fileName+"</h2><audio preload='auto' controls><source src=' "  + val +
                    "' /> </audio></div></div>"
                    );
            }
        });
    }
});

//for local remove +folder+