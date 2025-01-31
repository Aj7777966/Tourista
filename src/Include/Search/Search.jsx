import React from "react";

const Page = () => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" />

            <form role="search" method="get" action="">
                <div class="input-container">
                    <input type="search" class="search-input" value="" name="s" placeholder="Search entire website..." />
                    <button type="submit" class="search-submit" name="submit"><i class="material-icons">search</i></button>
                </div>
            </form>
            <span>Included in <a href="https://hovercraft.vip" target="_blank">HoverCraft</a></span>
        </>
    )
}
export default Page