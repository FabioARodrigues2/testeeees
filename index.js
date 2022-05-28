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
                                                                $("img").show();
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

function testaApi() {
    $.ajax({
        url: "https://hackjoy-api.herokuapp.com/",
        headers: { 'Content-Type': 'application/json' },
        type: "GET",
        data: {},
        success: function(response) {
            console.log(response)
        },
        error: function(response) {
            console.error(response);
        }
    });
}