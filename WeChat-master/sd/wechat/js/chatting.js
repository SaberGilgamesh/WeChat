$(function() {    
		var key = "cbe8712debb6423c8a2ebd43082320fc";
		var url = "http://www.tuling123.com/openapi/api";
		
		$('#btn').click(function() {  //当点击时
			
			var info = {
				"key": key,
				"info": $("#content").val() 
			}   //向图灵 发送 聊天数据     .val  =  value
			
			var self = $("<div class='right'><div class='right-content size'>"+$("#content").val()+"</div><div id='triangle' class='tri-right'></div><div id='chatting-item-right'></div></div><br>")
			$("#wrap").append(self)
			

			$.ajax({
				type: "POST",
				url: url,
				data: info,
				dataType: "json",
				success: function(result) {
					var robot = $("<div class='left'><div id='chatting-item-left'><div id='triangle' class='tri-left'></div></div><div class='left-content size'>"+result.text +"</div></div><br>")

					$("#wrap").append(robot)
					
					$('#wrap').scrollTop( $('#wrap')[0].scrollHeight );//当内容溢出时，页面置于底部
					
				}
			});

		})

	})