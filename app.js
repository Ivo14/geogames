import page from "./node_modules/page/page.mjs"
import { homePage } from "./views/home.js";
import { capitalsPage } from "./views/capitals.js";
import { flagsPage } from "./views/flag.js";
import { descriptionPage } from "./views/description.js"
import { maplocationPage } from "./views/maplocation.js"
page('/',homePage);
page('/capitals',capitalsPage);
page('/flag',flagsPage)
page('/description',descriptionPage)
page('/maplocation',maplocationPage)
page.start();