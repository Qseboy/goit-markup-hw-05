// menu
(() => {
    const per = {
        currentLink: document.getElementById("link-active"),
        currentUrl: window.location.href,
        menu: document.getElementsByClassName("nav-link")
    }
    per.currentLink = new URL(per.currentLink);

    console.log("currentLink", per.currentLink.href)
    console.log("currentURL", per.currentUrl)

    if (per.currentLink.href !== per.currentUrl) {
        document.getElementById("link-active").removeAttribute("id");

        for (let i = 0; i < 3; i++) {
            if (per.menu[i].href == per.currentUrl) {
                console.log("per.menu[i]", per.menu[i])
                per.menu[i].setAttribute('id','link-active')
            }
        }
    }
   
})();