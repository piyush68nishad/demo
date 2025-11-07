$(function () {
  var path = location.pathname.split("/").pop() || "index.html";
  $(".nav-list a")
    .filter(function () {
      return $(this).attr("href") === path;
    })
    .addClass("active");
  
  if (path === "contact.html")
    $("#contact-form").on("submit", function (e) {
      e.preventDefault();
      $(".error").remove();
      var valid = true,
        val = function (s) {
          return $.trim($(s).val());
        };
      var name = val("[name=name]"),
        email = val("[name=email]"),
        phone = val("[name=phone]"),
        message = val("[name=message]");
      var show = function (s, m) {
        $(s).after('<div class="error text-danger small mt-1">' + m + "</div>");
        valid = false;
      };
      if (name.length < 2) show("[name=name]", "Please enter your name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        show("[name=email]", "Please enter a valid email");
      if (!/^\+?[0-9\-\s]{7,20}$/.test(phone))
        show("[name=phone]", "Please enter a valid phone");
      if (message.length < 10)
        show("[name=message]", "Message must be at least 10 characters");
      if (valid) $("#contact-form").hide(), $(".contact-confirm").show();
    });
});
