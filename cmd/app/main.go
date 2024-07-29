package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/webdevcody/go-mailing-list/routes"
)

func main() {
	// hostname := os.Getenv("HOSTNAME")
	addr := os.Getenv("HTTP_LISTEN_ADDR")

	// if hostname != "" {
	// 	addrs, err := net.LookupHost(hostname)
	// 	if err != nil {
	// 		fmt.Printf("Failed to resolve hostname %s: %v\n", hostname, err)
	// 		os.Exit(1)
	// 	}
	// 	addr = fmt.Sprintf("[%s]", addrs[0]) + ":3000"
	// 	fmt.Printf("Resolved addresses for %s: %v\n", hostname, addr)
	// }

	app := fiber.New(fiber.Config{
		Network: fiber.NetworkTCP,
	})

	app.Static("/public", "./public")

	routes.RegisterRoutes(app)

	log.Fatal(app.Listen(addr))
}
