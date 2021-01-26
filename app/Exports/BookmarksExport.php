<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BookmarksExport implements FromCollection, WithTitle, WithMapping, WithHeadings
{
    use Exportable;

    /**
     *
     * Bookmarks collection.
     *
     * @var \Illuminate\Support\Collection
     */
    protected $bookmarks;

    /**
     *
     * Array with sheet headings.
     *
     * @var array
     */
    protected $headings;

    /**
     * Create a new bookmarks export instance.
     *
     * @param \Illuminate\Support\Collection $bookmarks
     * @return void
     */
    public function __construct(Collection $bookmarks)
    {
        $this->bookmarks = $bookmarks;
        $this->setHeadings();
    }

    /**
     * Set headings property.
     *
     * @return void
     */
    protected function setHeadings(): void
    {
        $this->headings = [
            'Created at',
            'Favicon',
            'Url',
            'Title',
            'Meta description',
            'Meta keywords'
        ];
    }

    /**
     *
     * Return bookmarks collection.
     *
     * @return \Illuminate\Support\Collection
     */
    public function collection(): Collection
    {
        return $this->bookmarks;
    }

    /**
     *
     * Return sheet title.
     *
     * @return string
     */
    public function title(): string
    {
        return 'Bookmarks';
    }

    /**
     *
     * Modify bookmark fields before incude to sheet.
     *
     * @param \App\Models\Bookmark $bookmark
     * @return array
     */
    public function map($bookmark): array
    {
        $data = [
            $bookmark->created_at->format('H:i d.m.Y'),
            $bookmark->favicon_url,
            $bookmark->url,
            $bookmark->title,
            $bookmark->meta_description,
            $bookmark->meta_keywords
        ];
        return $data;
    }

    /**
     *
     * Return sheet headings.
     *
     * @return array
     */
    public function headings() : array
    {
        return $this->headings;
    }
}
