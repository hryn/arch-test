package main

import (
	"fmt"
	"regexp"
	"strings"
)

func countWord(text string) map[string]int {

	reg := regexp.MustCompile(`[^\w\s]`)
	clearString := reg.ReplaceAllString(text, "")
	clearString = strings.ToLower(clearString)

	words := strings.Fields(clearString)

	wordFreq := make(map[string]int)

	// Count each word
	for _, word := range words {
		wordFreq[word]++
	}

	return wordFreq
}

func main() {
	str := "Four, One two two three Three three four  four   four"

	wordFrequency := countWord(str)

	for word, count := range wordFrequency {
		fmt.Printf("%s -> %d\n", word, count)
	}
}
