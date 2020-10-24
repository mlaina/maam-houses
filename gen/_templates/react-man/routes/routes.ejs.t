---
to: ./out/Routes.js
---
import <%= mayusname %>Page from "./pages/user/<%= mayusname %>Page";
import <%= mayuspluralname %>Page from "./pages/user/<%= mayuspluralname %>Page";

    //elegir si es con login o sin login

    <Route path="/<%= name %>" component={<%= mayusname %>Page}/>
    <Route path="/<%= pluralname %>" component={<%= mayuspluralname %>Page}/>