function centeringWindows()
{
    let window_height = $(window).height();
    let main_height = $("#main-container").height();
    
    let new_offset = (window_height / 2) - (main_height / 2);
    
    $("#main-container").css(
    {
        top: new_offset
    });
}

function convertPosition(window)
{
    window.css(
    {
        left: ((parseInt(window.css("left")) * 100) / $("#main-container").width()) + "%",
        top: ((parseInt(window.css("top")) * 100) / $("#main-container").height()) + "%"
    });
}

function convertSize(window)
{
    window.css(
    {
        height: ((parseInt(window.css("height")) * 100) / $("#main-container").height()) + "%",
        width: ((parseInt(window.css("width")) * 100) / $("#main-container").width()) + "%"
    });
}

function setTopMost(window)
{
    if (window.hasClass("active") == false)
    {
        let max_z = 0;
        
        $(".window").each(function()
        {
            let this_z = parseInt($(this).css("z-index"));
            
            if (this_z > max_z)
            {
                max_z = this_z;
            }
            
            $(this).removeClass("active");
        });
        
        max_z = max_z + 1;
        
        window.addClass("active");
        
        window.css(
        {
            zIndex: max_z
        });
    }
}

$(function()
{
    let now = new Date();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[now.getDay()];
    let number = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10)
    {
        hours = "0" + hours;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    let date = [day, month, number, year].join(" ");
    let time = [hours, minutes, seconds].join(":");

    $("#full-date").text(date + " " + time);
    $("#date-year").text(year);

    centeringWindows();
    
    $(".window").each(function()
    {
        convertSize($(this));
    });

    $(window).resize(function()
    {
        centeringWindows();
    });
    
    $(".close").click(function()
    {
        $(this).closest(".window").fadeOut(400, function()
        {
            $(this).remove();
        });
    });
    
    $(".window").click(function()
    {
        setTopMost($(this));
    });
    
    $(".window").draggable(
    {
		handle: ".title-bar",

        start: function(event, ui)
        {
            setTopMost($(this));
        },
        stop: function(event, ui)
        {
            convertPosition($(this));
        }
    });
    
    $(".window").resizable(
    {
        start: function(event, ui)
        {
            setTopMost($(this));
        },
        stop: function(event, ui)
        {
            convertSize($(this));
        }
    });
    
    $("#contact-form_submit").click(function()
    {
        $(this).prop("disabled", true);
        $(this).children(".text").text("Invio...");
        
        let formData = {
        
            "name": $("#contact-form_name").val(), 
            "email": $("#contact-form_email").val(), 
            "subject": $("#contact-form_subject").val(), 
            "message": $("#contact-form_message").val()
        };
        
        $.ajax(
        {
            type: "POST",
            url: "/ajax/send-message.php",
            data: formData,
			dataType: "json",

            success: function(response)
            {
                if (response.type == "success")
                {
                    $("#contact-form").fadeOut(400, function()
                    {
                        $(this).html("<div class = \"text-center\"><h2>" + response.text + "</h2></div>");
                        $(this).fadeIn();
                    });
                }
                else
                {
                    alert(response.text);
                    
                    $("#contact-form_submit").prop("disabled", false);
                    $("#contact-form_submit").children(".text").text("Retry");
                }
            },
            error: function(response)
            {
                alert("An unknown error has occurred!");
                
                $("#contact-form_submit").prop("disabled", false);
                $("#contact-form_submit").children(".text").text("Retry");
            }
        });
    });
});
