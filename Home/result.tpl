<div>
    <i class="iconfont" style="color: <%= color %> ">&#x<%= code%></i>
    <span class="title"> <%= type %> </span>
</div>
<div class="divider"></div>
<div class="content">
    <% list.forEach(function(item){ %>
        <div class="type"><%= item[0] %></div> 
        <div class="divider"></div>
        <div class="container">
            <div class="row">
                <% for(var i=1;i<item.length;i++){ %>
                    <span class="col-lg-2 col-md-3 col-sm-4 col-xs-12"><%= item[i] %></span>
                <% } %>
            </div>
        </div>
    <% }) %>
</div>
