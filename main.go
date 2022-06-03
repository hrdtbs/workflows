package main

import (
	"fmt"

	greetings "github.com/hrdtbs/private-go-module"
)

func main() {
	// Get a greeting message and print it.
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}
