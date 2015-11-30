# Countdown
一个给按钮，链接，div添加倒计时的js

## 配置
* default_str  默认显示字符串，如果为空则使用本身的文本或值
* sep 分隔符
* delay_class 点击后的样式名，默认为`active`
* delay_time 计时时间，单位为秒,默认为10
* step 计时频率，默认为1000
* before_count 计时前的回调函数，默认为function() {}
* after_count 计时后的回调函数，默认为function() {}
* append_before_str 计时的前缀，默认为'('
* append_after_str 计时的后缀，默认为')'


## 使用示例
```
<html>
	<head>
		<script src="http://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"></script>
		<script src="/Countdown.js"></script>
	</head>
	<body>
		<input id='test_input' type="button" value="this is input" />
		
		<a id='test_link' href='#' >this is a link</a>
		
		<form>
			<button id='test_button'>this is button</button>
		</form>
    
    <div id="test_div" style="border: 1px solid grey;">this is div</div>
	</body>
	<script>
	$(function(){
		$('#test_input').Countdown();
		$('#test_link').Countdown({
			before_count: function(){
				alert('link --- before');
			},
			after_count: function(){
				alert('link --- after');
			}
		});
		$('#test_button').Countdown({
			delay_time: 180
		});
		$('#test_div').Countdown();
	});
	</script>
</html>

```
