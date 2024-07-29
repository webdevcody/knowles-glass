package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/webdevcody/go-mailing-list/routes"
)

func main() {

	hostname := "knowles-glass-go.railway.internal"
	addrs, err := net.LookupHost(hostname)
	if err != nil {
		fmt.Printf("Failed to resolve hostname %s: %v\n", hostname, err)
	}
	fmt.Printf("Resolved addresses for %s: %v\n", hostname, addrs)

	hostname = "knowles-glass-go"
	addrs, err = net.LookupHost(hostname)
	if err != nil {
		fmt.Printf("Failed to resolve hostname %s: %v\n", hostname, err)
		os.Exit(1)
	}
	fmt.Printf("Resolved addresses for %s: %v\n", hostname, addrs)

	app := fiber.New()

	app.Static("/public", "./public")

	routes.RegisterRoutes(app)

	addr := os.Getenv("HTTP_LISTEN_ADDR")

	log.Fatal(app.Listen(addr))
}
