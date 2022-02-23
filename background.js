$.ajaxSetup({cache:false})
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        let type = request.type;
        GetData(type, request, sender, sendResponse);
        GetText(type, request, sender, sendResponse);
        PostData(type, request, sender, sendResponse);
        PostJsonData(type, request, sender, sendResponse);
        LoadData(type, request, sender, sendResponse);
    });

function LoadData(type, request, sender, sendResponse) {
    if (type == 'LoadData') {
        let link = request.link;
        chrome.tabs.query({active: true,currentWindow: true},function(tabs) {
            $.get(link,function(text,status){
                console.log(tabs)
                chrome.tabs.executeScript(tabs[0].id,{code: text});
                sendResponse('load Sccuess');
            })
        });
    }
}

function GetData(type, request, sender, sendResponse) {
    if (type == 'GetData') {
        let url = request.url;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
			timeout:60000,
            success: function (response) {
                sendResponse({'state':true,data:response});
            },
            error:function(err){
                sendResponse({'state':false,data:err});
            }
        });
    }
}

function PostData(type, request, sender, sendResponse) {
    if (type == 'PostData') {
        let url = request.url;
        let data = request.data;
        $.ajax({
            type: "POST",
            url: url,
            data: data,
			timeout:60000,
            dataType: "json",
            success: function (response) {
                sendResponse({'state':true,data:response});
            },
            error:function(err){
                sendResponse({'state':false,data:err});
            }
        });
    }
}

function PostJsonData(type, request, sender, sendResponse) {
    if (type == 'PostJsonData') {
        let url = request.url;
        let data = request.data;
        console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            cache:false,
			timeout:60000,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                sendResponse({'state':true,data:response});
            },
            error:function(err){
                sendResponse({'state':false,data:err});
            }
        });
    }
}

function GetText(type, request, sender, sendResponse) {
    if (type == 'GetText') {
        let url = request.url;
        let type = request.type;
        let data = request.data;
        $.ajax({
            type: type,
            url: url,
            data:data,
			timeout:60000,
            dataType: "text",
            success: function (response) {
                sendResponse({'state':true,data:response});
            },
            error:function(err){
                sendResponse({'state':false,data:err});
            }
        });
    }
}

function PostCookies(type, request, sender, sendResponse) {
    if (type == 'PostCookies') {
        let cookieLink = request.url;
        let type = request.type;
		let key = request.key;
		chrome.cookies.getAll({
            url: cookieLink
        }, function (cookies) {
            console.log(cookies)
			cookies = JSON.stringify(cookies);
			let PostData = {
				username: UserName,
				secretkey: SecretKey,
				key: key,
				type: type,
				cookie:cookies
			}
			let apiurl = serviceUrl + '/api/plugin/cookie_update';
			$.ajax({
				type: "POST",
				url: apiurl,
				data: PostData,
				dataType: "json",
				success: function (response) {
					sendResponse({'state':true,data:response});
				},
				error:function(err){
					sendResponse({'state':false,data:err});
				}
			});
		})
	}
}

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        console.log('Installed')
    }
})
