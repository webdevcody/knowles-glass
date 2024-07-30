package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/webdevcody/go-mailing-list/routes"
)

func main() {
	addr := os.Getenv("HTTP_LISTEN_ADDR")

	app := fiber.New(fiber.Config{
		Network: fiber.NetworkTCP,
	})

	app.Static("/public", "./public")

	routes.RegisterRoutes(app)

	log.Fatal(app.Listen(addr))
}
