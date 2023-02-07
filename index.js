class Formatter {
  
    static capitalize(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
    	return string.replace(/[^A-Za-z0-9- ']+/g, "")
    }

	static titleize(string) {
		let arr = string.split(' ')
		let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
		// console.log(arr)
		const arr2 = arr.map((word, i)  => {
			return excludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
		})
		return arr2.join(' ')
	}
}