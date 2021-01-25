<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     *
     * Return view for spa.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index(): object
    {
        return view('spa');
    }
}
