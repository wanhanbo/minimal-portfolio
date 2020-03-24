<template>
    <div class="fav">
        <div class="heading">
            <div class="title">Favourite Movies</div>
            <div class="filter">
                <select name="" id="">
                    <option value="">Movies</option>
                    <option value="">Tvs</option>
                    <option value="">Books</option>
                </select>
            </div>
        </div>
        <div class="content">
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
            <div class="card">
                <div class="title">Koi Mil Gaya</div>
                <div class="strip"></div>
            </div>
        </div>
        <div class="pagination">
            <div class="btn back">back</div>
            <div class="btn next">next</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FavMovies'
}
</script>
<style lang="scss" scoped>
    .fav {
        margin: 3% 5% 2% 5%;
        .heading {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .title {
                font-size: 2em;
                text-align: left;
                font-weight: 600;
                justify-self: left;
            }
            .filter {
                justify-self: right;
            }
        }
        .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 5%;
            grid-row-gap: 5%;
            margin: 2%;
            .card {
                height: 250px;
                border-radius: 4px;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                .strip {
                    width: 60%;
                    height: 10px;
                    background: brown;
                    position: relative;
                    top: 60%;
                    right: 10%;
                }
                .title {
                        position: relative;
                        top: 60%;
                        right: 47%;
                        display: grid;
                        justify-items: end;
                        align-items: end;
                        text-align: left;
                        font-size: 1.3em;
                }
            }
        }
        .pagination {
            margin: 5% 2%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .btn {
                border-radius: 4px;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                padding: 2% 4%;
            }
            .back {
                justify-self: left;
            }
            .next {
                justify-self: right;
            }
        }
    }
</style>