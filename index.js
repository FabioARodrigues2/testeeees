const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
}

function amoooor() {
    swal({
            title: "",
            text: "You",
            icon: "info",
            dangerMode: true,
        })
        .then((willDelete) => {
            swal({
                    title: "",
                    text: "And",
                    icon: "info",
                    dangerMode: true,
                })
                .then((willDelete) => {
                    swal({
                            title: "",
                            text: "Me",
                            icon: "warning",
                            dangerMode: true,
                        })
                        .then((willDelete) => {
                            swal({
                                    title: "",
                                    text: "Always",
                                    icon: "error",
                                    dangerMode: true,
                                })
                                .then((willDelete) => {
                                    swal({
                                            title: "",
                                            text: "Forever",
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                        .then((willDelete) => {
                                            swal({
                                                    title: "",
                                                    text: "Me da um beijo?",
                                                    buttons: true,
                                                })
                                                .then((willDelete) => {
                                                    if (willDelete) {
                                                        swal({
                                                                title: "",
                                                                text: "BEIJAO LINDO (*ˊᗜˋ*)",
                                                                icon: "success",
                                                                buttons: true,
                                                            })
                                                            .then((willDelete) => {
                                                                $("#conteudo").show();
                                                            });
                                                    } else {
                                                        swal("", "não me ama (ￗ﹏ￗ ) (ￗ﹏ￗ ) (ￗ﹏ￗ )", "error");
                                                    }


                                                });
                                        });
                                });
                        });
                });
        });
}

$("#myheart").on("click", function() {
    $("#surpresa").show();
    $("html, body").animate({ scrollTop: 0 }, "slow");

    setInterval(createHeart, 100);
    setInterval(function name(params) {
        var heartArr = document.querySelectorAll(".fa-heart")
        if (heartArr.length > 200) {
            heartArr[0].remove()
        }
        //console.log(heartArr);
    }, 100);
});