package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/webdevcody/go-mailing-list/routes/landing"
	"github.com/webdevcody/go-mailing-list/utils"
)

func RegisterRoutes(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return utils.Render(c, landing.LandingPage())
	})
}
