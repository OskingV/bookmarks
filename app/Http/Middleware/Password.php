<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Password
{
    /**
     * Check password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->password !== 'password') {
            return response()->json([
                'error' => 'Unauthenticated.'
            ], 401);
        }
        return $next($request);
    }
}
