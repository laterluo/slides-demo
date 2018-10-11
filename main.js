let n
init()
setInterval(() => {
	makeLeave(getN(n))
		.one('transitionend', (e) => {
			makeEnter($(e.currentTarget))
		})
	makeCurrent(getN(n+1))
	n += 1
}, 3000)



function x(n){
	if(n > 3){
		n = n%3
		if(n ===0){
			n = 3
		}
	}
	return n
}

function getN(n){
	return $(`.images > img:nth-child(${x(n)}`)
}

function init(){
	n = 1
	$(`.images > img:nth-child(${n})`).addClass('current')
		.siblings().addClass('enter')
}

function makeLeave($node){
	return $node.removeClass('current').addClass('leave')
}

function makeEnter($node){
	return $node.removeClass('leave').addClass('enter')
}

function makeCurrent($node){
	return $node.removeClass('enter').addClass('current')
}