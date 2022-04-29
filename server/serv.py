import json

import aiohttp_cors
from aiohttp import web


async def handler(request):
    if request.method == "POST":
        r = await request.json()
        x = r.get('data')
        x = "nothing" if x == "" else f"{x!r}"
        return web.Response(text=json.dumps({"data": f"You sent {x}"}))


app = web.Application()
cors = aiohttp_cors.setup(
    app,
    defaults={
        "http://localhost:3457": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            allow_headers=["Content-Type"],
        )
    },
)
rsc = cors.add(app.router.add_resource("/"))
cors.add(rsc.add_route("POST", handler))


if __name__ == "__main__":
    web.run_app(app, host="localhost", port=3456)
