<?php

namespace App\Services\Bookmark\Contracts;

interface Parser
{
    /**
     * Get parsed data.
     *
     * @param string $url
     * @return array
     */
    public function parse(string $url): array;
}
