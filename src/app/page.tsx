export default function Home() {
  return (
    <section className="p-4" style={{ backgroundColor: '#F0FFFF', minHeight: '100vh' }}>
      <div 
        className="container bg-cover bg-center text-white p-8" 
        style={{ 
          backgroundImage: `url('blogpic.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh' 
        }}
      >
        <h1 className="text-4xl font-bold mb-4">My Blogging Website</h1>
        <p className="bg-black bg-opacity-50 p-4">
          It is no secret that in the digital age, having and maintaining a strong online presence is crucial for businesses and organizations, no matter their size. To paraphrase Shakespeare, your website is the window to your company or organization’s soul. As search engines evolved and Google rose to the top (sorry Bing and Ask.com) ensuring your site had the proper content to raise its SEO became as integral a part of a website’s content as User Experience was to functionality. Digital marketing classes abound with endless modules on the importance of keywords to ensure sites are on the first page of a search. But simply focusing on keywords, meta tags, and LSI keywords is no longer enough to stand out. Here, we will explore why it’s essential to keep website content interesting and engaging, regardless of your audience. The Problem with Keyword-centric Approaches While keywords are important for SEO, solely focusing on them can lead to content that feels forced and uninteresting. It is one thing to get someone to visit your site. That, as they say, is half the battle. But one of the key areas of any site’s analytics is bounce rate and how much time users spend on your site. You’ve brought them in, but is your content good enough to keep them there? According to MetricHQ, an open library for metrics and KPIs, 52 seconds is considered a good amount of time for someone to spend on your site. That is all the time you have to engage your audience.
        </p>
      </div>
    </section>
  );
}
