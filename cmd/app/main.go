package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/webdevcody/go-mailing-list/routes"
)

func getAddr(hostname string) string {
	addrs, err := net.LookupIP(hostname)
	if err != nil {
		fmt.Printf("Failed to resolve hostname %s: %v\n", hostname, err)
		os.Exit(1)
	}

	var ipv4Addr string
	for _, addr := range addrs {
		if ipv4 := addr.To4(); ipv4 != nil {
			ipv4Addr = ipv4.String()
			break
		}
	}

	if ipv4Addr == "" {
		fmt.Printf("No IPv4 address found for hostname %s\n", hostname)
		os.Exit(1)
	}

	addr := ipv4Addr + ":3000"
	fmt.Printf("Resolved IPv4 address for %s: %v\n", hostname, addr)

	return addr
}

func main() {
	hostname := os.Getenv("HOSTNAME")
	addr := os.Getenv("HTTP_LISTEN_ADDR")

	if hostname != "" {
		addr = getAddr(hostname)
	}

	app := fiber.New()

	app.Static("/public", "./public")

	routes.RegisterRoutes(app)

	log.Fatal(app.Listen(addr))
}
