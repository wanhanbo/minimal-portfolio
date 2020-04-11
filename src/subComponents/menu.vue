<template>
    <div class="menuBox">
        <div class="upper">
            <div class="upperButtons">work</div>
            <div class="upperButtons">awards</div>
        </div>
        <div class="lower">
            <div class="title">Favourites</div>
            <div class="lowerButtons">
                <div class="circularButtons"><span>Movies</span></div>
                <div class="circularButtons"><span>TVs</span></div>
                <div class="circularButtons"><span>Books</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>
<style lang="scss" scoped>
    .menuBox {
        width: 60%;
        position: relative;
        top: 20%;
        .upper {
            display: grid;
            grid-template-columns: 20% 20%;
            grid-column-gap: 60%;
            text-align: center;
            .upperButtons {
                cursor: pointer;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
            }
        }
        .lower {
            .title {
                font-size: 1.5em;
                font-weight: 600;
                text-align: center;
            }
            border-radius: 4px;
            padding: 1%;
            -webkit-box-shadow: 5px 5px 5px 0px #6bbd8c;
            -moz-box-shadow: 5px 5px 5px 0px #6bbd8c;
            box-shadow: 0px 2px 5px 0px #6bbd8c;
            .lowerButtons {
                display: grid;
                grid-template-columns: 33% 33% 33%;
                justify-items: center;
                text-align: center;
                .circularButtons{
                    cursor: pointer;
                    border: 1px solid black;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    span {
                        position: relative;
                        top: 36%;
                    }
                }    
            }
        }
    }
</style>