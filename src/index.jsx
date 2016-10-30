<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="google-signin-scope" content="profile email"> <!-- Google sign in -->
    <meta name="google-signin-client_id" content="678093714798-1cj0ndne98lifqt7uvjql64bks0jbv0p.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script><!-- jQuery-->
    <script src="script.js"></script>
    <title>KrisTopper</title>
    <link rel="stylesheet" href="style.css"/>
    <link rel="icon" href="images/icon/icon.png"/>
</head>
<body>
    <div id="header"> <h2> KrisTopper</h2> </div>
    <div id="main">
        <div id="sidebar">
            <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> <!-- GOOGLE SIGN IN -->
            <a href="#" onclick="signOut();">Sign out</a> <!-- GOOGLE SIGN OUT -->
            <img class="profile-image" src="images/profile/defaultProfilePic.png"/>
            <h2 class="full-name">Full Name</h2>
        </div>
        <div id="main-page">
            <div class="text-page">
                <p> Hello I am Kristofer Brink. I am a person who in Indonesia was born and raised. In my house is where I spent most of my days. I don't know why but I knew it would be true. Nothing can stop me from commiting a felony even though I haven't done one yet. This is random babble just to test the looks of this website that I have made with css hooks.</p>
                <ul>
                    <li>Programming</li>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>JavaScript</li>
                        <li>html</li>
                        <li>CSS</li>
                    </ul>
                    <li>Rubix Cube</li>
                    <ul>
                        <li>My average time is 22 seconds</li>
                        <li>My best time is 18 seconds</li>
                    </ul>
                    <li>Here are my favorite websites</li>
                    <ul>
                        <li>Reddit</li>
                        <li>Youtube</li>
                        <li>Google</li>
                        <li>This website</li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
    <div id="footer"> <p> FOOTER</p></div>
</body>
</html>