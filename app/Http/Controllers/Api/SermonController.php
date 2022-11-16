<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sermon;
use App\Http\Requests\SermonRequest;
use App\Http\Resources\SermonResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SermonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SermonResource::collection(Sermon::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SermonRequest $request)
    {
        //
        $sermon = Sermon::create([
            'title' => $request->title,
            'body' => $request->body,
            'author' => Auth ::user()->id,
            'updated_by' => Auth ::user()->id,
            'published_by' => Auth ::user()->id,

        ]);
        return new SermonResource($sermon);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sermon  $sermon
     * @return \Illuminate\Http\Response
     */
    public function show(Sermon $sermon)
    {
        //
        return new SermonResource($sermon);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sermon  $sermon
     * @return \Illuminate\Http\Response
     */
    public function update(SermonRequest $request, Sermon $sermon)
    {
        //
        $sermon->update($request->validated());
        return new SermonResource($sermon);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sermon  $sermon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sermon $sermon)
    {
        //
        $sermon->delete();
        return response()->noContent();
    }
}
