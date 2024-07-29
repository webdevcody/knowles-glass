package landing

type Service struct {
	Title       string
	Description string
}

var services = []Service{
	{
		Title:       "Curtain Wall Systems",
		Description: "Enhance your building's appearance and functionality with our advanced curtain wall systems.",
	},
	{
		Title:       "Windows",
		Description: "Discover high-quality and energy-efficient window solutions for your commercial or residential needs.",
	},
	{
		Title:       "Storefront Frames",
		Description: "Create an inviting storefront with our durable and stylish frame options.",
	},
	{
		Title:       "Swinging or Sliding Doors",
		Description: "Upgrade your entrances with our modern and functional swinging or sliding door solutions.",
	},
}

var images = []string{
	"/public/new/curtain.jpg",
	"/public/gallery/7.jpeg",
	"/public/gallery/4.jpeg",
	"/public/gallery/11.jpeg",
}
