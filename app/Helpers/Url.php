<?php

namespace App\Helpers;

class Url
{
    /**
     * Get base url.
     *
     * @param string $url
     * @return string
     */
    public static function getBaseUrl(string $url): string
    {
        $parse = parse_url($url);
        return $parse['scheme'] . '://' . $parse['host'];
    }

    /**
     * Check correct url.
     *
     * @param string $string
     * @return bool
     */
    public static function isUrl(string $string): bool
    {
        return filter_var($string, FILTER_VALIDATE_URL);
    }
}
