import forin_promise from "forin_promise";
import sleep from "sleep-promise";

let aa = [1,2,3,4,5];

async function dododo()
{
    await forin_promise(aa, async (v,k) =>
    {
        await sleep(Math.random()* 5 * 1000)
        console.log(`value: ${v} ; key: ${k}`);
    }, aa.length)
}

dododo()