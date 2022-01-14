<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>xSTatic</title>
        <meta name="viewport" content="width=device-width initial-scale=1">
        <link rel="stylesheet" href="styles/style.css">
        <link rel="stylesheet" href="styles/style_home.css">
    </head>

    <body>
        <?php include("mutual/header.php");?>

        <main>
            <div class="window">
                <label class="label-text">xSTatic2021 Teaser</label>
                <hr class="main_line">
                <div id="div-video-teaser">
                    <video src="videos/xstatic2021_teaser.mp4" preload="auto" id="video-teaser" poster="images/xstatic_teaser_poster.jpg" controls>
                        Media file could not be played.
                    </video>
                </div>
            </div>

            <div class="window">
                <label class="label-text">About xSTatic Festival</label>
                <hr class="main_line">
                <div id="about_article">
                    <p class="main_text">
                        xSTatic festival is an international festival of street-art culture and extreme sport, based 
                        on four elements of hip-hop culture: mc-ing, dj-ing, b-boying and graffiti, with special 
                        emphasis on graffiti (street-art) culture.
                    </p>
                    <br>
                    <p class="main_text">
                        First xSTatic festival was held in 2009., and arose as an idea  of merging hip-hop culture and extreme sports, 
                        in the city of Split, under one "denominator", which is organizationally based on previous festivals: Style Assanitaion 
                        and STJam.
                    </p>
                    <br>
                    <label class="main_text"><a href="about.php" id="aboutlink" target="_self">View more...</a></label>
                </div>
            </div>

            <div class="window">
                <label class="label-text">Festival Gallery</label>
                <hr class="main_line">
                <div id="gallery_article">
                <p class="main_text">
                        You haven't been to the festival in previous years, and you want to see what the murals 
                        look like or what the atmosphere was like at the concert?
                        <br>
                        You can <a href="gallery.php" id="aboutlink" target="_self">see</a> what you missed out!
                    </p>
                    <br>
                </div>
            </div>

            <div class="window">
                <label class="label-text">Categories</label>
                <hr class="main_line">
                <div id="category_article">
                    <p class="main_text">
                        You don't know anything about street art culture, but you want to start doing graffiti 
                        art or you want to learn something more about extreme sports? 
                        Or maybe you want to expand your musical opuses with traditional rap and hip-hop culture?
                        <br>
                        You can <a href="category.php" id="aboutlink" target="_self">learn more</a> on our category page.
                    </p>
                    <br>
                </div>
            </div>

            <div class="window">
                <label class="label-text">Contact Us</label>
                <hr class="main_line">
                <div id="contact_article">
                    <p class="main_text">
                        Not sure where the festival is or how to contact the people working on the project?
                        <br>
                        Go to the <a href="contact.php" id="aboutlink" target="_self">contact page</a> and find out!
                    </p>
                    <br>
                </div>
            </div>
        </main>

        <?php include("mutual/footer.php");?>

        <script src="scripts/script.js"></script>
    </body>
</html>