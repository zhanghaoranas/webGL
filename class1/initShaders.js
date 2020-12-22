/*
 * @Author: zhanghaoran
 * @Date: 2020-12-22 22:01:34
 * @Last Modified by: zhanghaoran
 * @Last Modified time: 2020-12-22 22:55:35
 */

function initShaders(gl, vsSource, fsSource) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

	// 创建着色器程序

	const shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	// 创建失败， alert
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert(
			'Unable to initialize the shader program: ' +
				gl.getProgramInfoLog(shaderProgram),
		);
		return null;
	}

	return shaderProgram;
}

/**
 * 创建指定类型的着色器， 上传source源码并编译
 */
function loadShader(gl, type, source) {
	const shader = gl.createShader(type);

	// Send the source to the shader object

	gl.shaderSource(shader, source);

	// Compile the shader program

	gl.compileShader(shader);

	// See if it compiled successfully

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(
			'An error occurred compiling the shaders: ' +
				gl.getShaderInfoLog(shader),
		);
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}
