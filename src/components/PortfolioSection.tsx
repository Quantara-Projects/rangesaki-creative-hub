import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import rangeSakiAvatar from "@/assets/rangesaki-avatar.png";
import { useState, useEffect } from "react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Build Core",
      category: "Scripter",
      description:
        "I am proud to be part of a team of skilled developers and designers who craft innovative Roblox experiences that push the boundaries of interactive entertainment.",
      image:
        "https://tr.rbxcdn.com/180DAY-677f61a9a5f262fc0be1757aaf2d67d9/150/150/Image/Webp/noFilter",
      tags: ["Game Developer"],
      link: "https://www.roblox.com/communities/794835887/Build-Core#!/about",
    },
    {
      id: 2,
      title: "Silence [HORROR]",
      category: "Roblox Scripting",
      description:
        "Silence is a gripping stealth horror game where noise is your greatest enemy. (Still in development)",
      image: "https://t1.rbxcdn.com/180DAY-72e3bf7380cc3afa336d930623036561",
      tags: ["Lua", "RemoteEvents", "DataStore", "Game Systems"],
      link: "https://www.roblox.com/games/101604490759494/Silence-HORROR",
      status: "development",
    },
    {
      id: 3,
      title: "Viking Tycoon",
      category: "Roblox Game",
      description:
        "Epic opening cutscene with camera movements, lighting effects, and synchronized audio.",
      image:
        "https://tr.rbxcdn.com/180DAY-1ebc8a6fdbda7c01598cc502c2bc52fe/768/432/Image/Webp/noFilter",
      tags: ["Cutscenes", "Lighting", "Audio", "VFX", "Unique Gameplay"],
      link: "",
      status: "development",
    },
    {
      id: 4,
      title: "RangeSaki Portfolio",
      category: "Web Development",
      description:
        "This portfolio serves as a curated showcase of my ability to design and develop custom, user-centric websites—such as professional portfolios or personal bios—while emphasizing clean aesthetics, intuitive navigation, and technical precision.",
      image: rangeSakiAvatar,
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://rangesaki.netlify.app/",
    },
  ];

  // Ratings state with localStorage
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-reviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || rating === 0 || !description) return;
    const newReview = { name, rating, description };
    setReviews([...reviews, newReview]);
    setName("");
    setRating(0);
    setDescription("");
  };

  // --- Fix for average rating: compute numeric average, a display string, and a rounded value for star fill ---
  const avg =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + Number(r.rating || 0), 0) /
        reviews.length
      : 0;
  const averageRating = Number.isFinite(avg) ? avg : 0; // numeric avg
  const averageRatingDisplay = averageRating.toFixed(1); // string for UI display
  const averageRatingRounded = Math.round(averageRating); // integer for filling stars

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of Roblox projects, UI designs, and web
            development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && item.image !== "/placeholder.svg" ? (
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  {item.status === "development" && (
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      🚧 In Development
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {item.status === "development" ? (
                    <Button
                      disabled
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ratings Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-2">Client Ratings</h3>
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < averageRatingRounded ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < averageRatingRounded ? "currentColor" : "none"}
              />
            ))}
          </div>
          <p className="text-muted-foreground mb-6">
            Average Rating: {averageRatingDisplay} / 5 ({reviews.length} review
            {reviews.length !== 1 ? "s" : ""})
          </p>
        </div>

        {/* Review Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white/50 p-6 rounded-2xl shadow-lg mb-12"
        >
          <h4 className="text-lg font-semibold mb-4">Leave a Review</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write about your experience..."
            className="w-full p-2 border rounded-lg mb-4"
            rows="3"
          />

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 cursor-pointer ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < rating ? "currentColor" : "none"}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80"
          >
            Submit Review
          </button>
        </form>

        {/* Review List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-4 bg-white/50 rounded-xl shadow">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-muted-foreground text-sm">
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
