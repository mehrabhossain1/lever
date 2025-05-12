export default function Live() {
    return (
        <div className="bg-gradient-to-b from-sky-50 to-white flex flex-col items-center justify-center py-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6 text-center">
                Watch Our Live Broadcast
            </h1>
            <p className="text-gray-600 text-center mb-8 max-w-2xl">
                Stay connected with us through our live sessions. Watch the
                latest updates, discussions, and events happening right now on
                our Facebook Live stream.
            </p>
            <div className="w-full max-w-5xl aspect-video shadow-lg rounded-lg overflow-hidden">
                <iframe
                    src="https://youtube.com/live/67eVqgy4RnI?feature=share"
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    );
}
